/*
 * A32NX
 * Copyright (C) 2020 FlyByWire Simulations and its contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import './styles.scss';

const dataTemplate = {
    L1: {
        label: {
            text: 'LABEL 1',
            color: 'white',
        },
        field: {
            text: 'LEFT DATA 1',
            color: 'green',
            side: 'L',
        },
    },
    R1: {
        label: {
            text: 'LABEL 1',
            color: 'white',
        },
        field: {
            text: 'RIGHT DATA 1',
            color: 'green',
            side: 'R',
        },
    },
    L2: {
        label: {
            text: 'LABEL 2',
            color: 'white',
        },
        field: {
            text: 'LEFT DATA 2',
            color: 'green',
            side: 'L',
        },
    },
    R2: {
        label: {
            text: 'LABEL 2',
            color: 'white',
        },
        field: {
            text: 'RIGHT DATA 2',
            color: 'green',
            side: 'R',
        },
    },
    L3: {
        label: {
            text: 'LABEL 3',
            color: 'white',
        },
        field: {
            text: 'LEFT DATA 3',
            color: 'green',
            side: 'L',
        },
    },
    R3: {
        label: {
            text: 'LABEL 3',
            color: 'white',
        },
        field: {
            text: 'RIGHT DATA 3',
            color: 'green',
            side: 'R',
        },
    },
    L4: {
        label: {
            text: 'LABEL 4',
            color: 'white',
        },
        field: {
            text: 'LEFT DATA 4',
            color: 'green',
            side: 'L',
        },
    },
    R4: {
        label: {
            text: 'LABEL 4',
            color: 'white',
        },
        field: {
            text: 'RIGHT DATA 4',
            color: 'green',
            side: 'R',
        },
    },
    L5: {
        label: {
            text: 'LABEL 5',
            color: 'white',
        },
        field: {
            text: 'LEFT DATA 5',
            color: 'green',
            side: 'L',
        },
    },
    R5: {
        label: {
            text: 'LABEL 5',
            color: 'white',
        },
        field: {
            text: 'RIGHT DATA 5',
            color: 'green',
            side: 'R',
        },
    },
    L6: {
        label: {
            text: 'LABEL 6',
            color: 'white',
        },
        field: {
            text: 'LEFT DATA 6',
            color: 'green',
            side: 'L',
        },
    },
    R6: {
        label: {
            text: 'LABEL 6',
            color: 'white',
        },
        field: {
            text: 'RIGHT DATA 6',
            color: 'green',
            side: 'R',
        },
    },
};

const BasePage = (props) => {
    const {
        data,
    } = props;
    return (
        <div className="mcdu-contents">
            {Object.values(data).map((item) => (
                <div className={item.field.side === 'L' ? 'align-left' : 'align-right'}>
                    <label className={item.field.side === 'L' ? 'left-label' : 'right-label'}>
                        <span className={item.label.color}>{item.label.text}</span>
                    </label>
                    <p>
                        <span className={item.field.color}>{item.field.text}</span>
                    </p>
                </div>
            ))}
        </div>
    );
};

export { BasePage, dataTemplate };
