import React from 'react';
import './media/titlebar.css';

const Titlebar = () => {
	return (
<div className="windows">
    <div className="windows"
        style={{top: "0px", right: "0px", bottom: "0px", left: "0px", position: "relative", width: "100%", height: "300px"}}>
        <div className="window-grid-view">
            <div className="window-view-container">
                <div className="grid-view-view" style={{top: "0px", height: "30px"}}>
                    <div className="part titlebar" id="window.parts.titlebar" role="contentinfo"
                        style={{backgroundColor: "rgb(60, 60, 60)", color: "rgb(204, 204, 204)", width: "100%", height: "30px"}}>
                        <div className="titlebar-drag-region"></div>
                        <div className="window-appicon"></div>
                        <div className="menubar" role="menubar" style={{height: "30px"}}>
                            {/* <!-- Menu Options go here --> */}
                        </div>
                        <div className="window-title">
                          Window Title
                        </div>
                      <div className="window-controls-container">
                        <div className="window-icon"></div>
                        <div className="window-icon"></div>
                        <div className="window-icon"></div>
                      </div>
                      <div className="resizer" style={{display: "none"}} aria-hidden="true"></div>
                    </div>
                </div>

                <div className="grid-view-view" style={{top: "30px", height: "248px"}}></div>
                <div className="grid-view-view" style={{top: "278px", height: "22px"}}></div>
            </div>
        </div>
    </div>
</div>
	);
};

export default Titlebar;
