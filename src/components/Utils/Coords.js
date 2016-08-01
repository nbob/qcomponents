import _sortBy from 'lodash/sortBy';

let positions = {
    horizontal: ['left', 'center', 'right'],
    vertical: ['top', 'middle', 'bottom']
};

let fullPositions = {
    horizontal: [],
    vertical: []
};
for (let axis of Object.keys(positions)) {
    for (let masterSide of positions[axis]) {
        for (let slaveDirection of positions[axis]) {
            fullPositions[axis].push([masterSide,slaveDirection]);
        }
    }
}

class Coords {

    static positions = fullPositions;

    static __getBaseRect(masterRect, slaveEl) {
        return {
            left: masterRect.left,
            top: masterRect.top,
            width: slaveEl.offsetWidth,
            height: slaveEl.offsetHeight
        };
    }

    static getVSideDiff(el, side) {
        switch (side) {
            case 'top':
                return 0
            case 'bottom':
                return el.height;
            case 'middle':
                return el.height / 2;
        }
    }

    static getHSideDiff(el, side) {
        switch (side) {
            case 'left':
                return 0
            case 'right':
                return el.width;
            case 'center':
                return el.width / 2;
        }
    }

    static alignVertical(master, slave, position) {
        let resultPosition = {
            offset: {},
            windowOffset: {},
        };
        let yDiff = Coords.getVSideDiff(master, position[0]);
        yDiff -= Coords.getVSideDiff(slave, position[1]);

        resultPosition.offset.top = master.offset.top + yDiff;
        resultPosition.windowOffset.top = master.windowOffset.top + yDiff;
        resultPosition.windowOffset.bottom = window.innerHeight - resultPosition.windowOffset.top - slave.height;

        return resultPosition;
    }

    static alignHorizontal(master, slave, position) {
        let resultPosition = {
            offset: {},
            windowOffset: {}
        };
        let xDiff = Coords.getHSideDiff(master, position[0]);
        xDiff -= Coords.getHSideDiff(slave,position[1])

        resultPosition.offset.left = master.offset.left + xDiff;
        resultPosition.windowOffset.left = master.windowOffset.left + xDiff;
        resultPosition.windowOffset.right = window.innerWidth - resultPosition.windowOffset.left - slave.width;

        return resultPosition;
    }

    static calcWindowOffsets(masterEl, slaveEl, vAlign=null, hAlign=null) {
        let master = {
            offset: {
                left: masterEl.offsetLeft,
                top: masterEl.offsetTop,
            },
            windowOffset: {
                left: masterEl.getBoundingClientRect().left,
                top: masterEl.getBoundingClientRect().top
            },
            width: masterEl.offsetWidth,
            height: masterEl.offsetHeight
        };
        let slave = {
            width: slaveEl.offsetWidth,
            height: slaveEl.offsetHeight
        };
        let hPositions = {};
        let hPositionTypes = Coords.positions.horizontal;
        if (hAlign) {
            hPositionTypes = hAlign;
        }
        for (let hPos of hPositionTypes) {
            hPositions[hPos] = Coords.alignHorizontal(master, slave, hPos);
        }

        let vPositions = {};
        let vPositionTypes = Coords.positions.vertical;
        if (vAlign) {
            vPositionTypes = vAlign;
        }
        for (let vPos of vPositionTypes) {
            vPositions[vPos] = Coords.alignVertical(master, slave, vPos);
        }
        return {
            horizontal: hPositions,
            vertical: vPositions,
            width: slave.width,
            height: slave.height,
        }
    }

    static getClientPosition(coords, aligns) {

        let { horizontal, vertical } = coords;

        let vAligns = aligns.map(align => align[0]);

        let newVAlign = vAligns[0];
        let sumOverflowCurrent = 0;
        let wOffsetCurrent = vertical[newVAlign];
        if (wOffsetCurrent.top < 0) {
            sumOverflowCurrent -= wOffsetCurrent.top;
        }
        if (wOffsetCurrent.bottom < 0) {
            sumOverflow -= wOffsetCurrent.bottom;
        }

        for (let vAlign of vAligns) {
            let wOffset = vertical[vAlign].windowOffset;
            if (wOffset.bottom > 0 && wOffset.top > 0) {
                newVAlign = vAlign;
                break;
            } else {
                let sumOverflow = 0;
                if (wOffset.top < 0) {
                    sumOverflow -= wOffset.top;
                }
                if (wOffset.bottom < 0) {
                    sumOverflow -= wOffset.bottom;
                }

                if (sumOverflow < sumOverflowCurrent) {
                    sumOverflowCurrent = sumOverflow;
                    newVAlign = vAlign;
                }
            }
        }

        let hAligns = aligns.filter(align => {
            return align[0][0] == newVAlign[0] && align[0][1] == newVAlign[1];
        })
        hAligns = _sortBy(hAligns, align => {
            let weight = 0;
            if (aligns[0][1][0] == align[1][0]) {
                weight++;
            }
            if (aligns[0][1][1] == align[1][1]) {
                weight++;
            }
            return -weight;
        }).map(align => align[1]);

        let newHAlign = hAligns[0];
        sumOverflowCurrent = 0;
        wOffsetCurrent = horizontal[newHAlign];
        if (wOffsetCurrent.left < 0) {
            sumOverflowCurrent -= wOffsetCurrent.left;
        }
        if (wOffsetCurrent.right < 0) {
            sumOverflow -= wOffsetCurrent.right;
        }

        for (let hAlign of hAligns) {
            let wOffset = horizontal[hAlign].windowOffset;
            if (wOffset.left > 0 && wOffset.right > 0) {
                newHAlign = hAlign;
                break;
            } else {
                let sumOverflow = 0;
                if (wOffset.left < 0) {
                    sumOverflow -= wOffset.left;
                }
                if (wOffset.right < 0) {
                    sumOverflow -= wOffset.right;
                }

                if (sumOverflow < sumOverflowCurrent) {
                    sumOverflowCurrent = sumOverflow;
                    newHAlign = hAlign;
                }
            }
        }

        return {
            vertical: newVAlign,
            horizontal: newHAlign
        };

    }

}

export default Coords;
