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

import { useState, useEffect, useContext } from 'react';
import { BasePage, dataTemplate } from '../Templates/BasePage.jsx';
import { RootContext } from '../../RootContext.jsx';

const MenuPage = () => {
    const [data, setData] = useState(dataTemplate);
    const [, , , setTitle] = useContext(RootContext);

    useEffect(() => {
        setTitle('MCDU MENU');
        // TODO find out how to maintain the ordering or build a new structuring template or remove the map from the basepage.
        setData((prevState) => ({
            ...prevState,
            L1: {
                ...prevState.L1,
                field: {
                    ...prevState.L1.field,
                    text: 'FMGC',
                },
            },
            L2: {
                ...prevState.L2,
                field: {
                    ...prevState.L2.field,
                    text: 'ATSU',
                },
            },
            L3: {
                ...prevState.L3,
                field: {
                    ...prevState.L3.field,
                    text: 'AIDS',
                },
            },
            L4: {
                ...prevState.L4,
                field: {
                    ...prevState.L4.field,
                    text: 'CFDS',
                },
            },
            R6: {
                ...prevState.R6,
                field: {
                    ...prevState.R6.field,
                    text: 'Return',
                },
            },
        }));
    }, []);

    /**
     * TODO create event handlers
     * TODO create handling of scratchpad messages
     */

    return (
        <BasePage data={data} />
    );
};

export { MenuPage };
