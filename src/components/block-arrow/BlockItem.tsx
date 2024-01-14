import React from 'react';
import s from './BlockItem.module.css'

function BlockItem() {
    return (
        <div className="block-item block-break b-e40650e3fd774f5cac7a50e52ff92f2e">
            <div className={s.blockBreak}>
            <span className={s.span}>
              <svg className={s.svgArrow}
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 448 512">
                <path
                    d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"></path>
              </svg>
            </span>
            </div>
        </div>
    );
}

export default BlockItem;