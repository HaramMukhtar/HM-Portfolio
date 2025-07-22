import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const GD = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Graphics Designing Tools</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Adobe Photoshop</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    {/* <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Canva</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div> */}
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Adobe XD</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Canva</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    {/* <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name">Vercel</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default GD;