import React from 'react'
import { useNavigate } from "react-router-dom";

export function NotFound() {
    const navigate = useNavigate();
    return <div id="NotFound">
        <h1>Oops!</h1>
        <p>Looks like whatever you were looking for is not here, so let's just <span className="hoverlink color bold" onClick={() => navigate(-1)} >go back</span>.</p>
    </div>
}