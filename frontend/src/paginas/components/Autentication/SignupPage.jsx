import React from "react";
import { SignupForm } from "@userfront/react";

const SignupPage = () => {
    return (
        <div className="mt-20">
            <SignupForm theme=' {"colors":{"light":"#1c71d8","dark":"#1a5fb4","accent":"#13a0ff","lightBackground":"#fdfdfd","darkBackground":"#613583"},"colorScheme":"auto","fontFamily":"Andale Mono, Monaco, Consolas, Courier New, monospace","size":"compact","extras":{"rounded":true,"gradientButtons":true,"hideSecuredMessage":false}}' />
        </div>
    );
}

export default SignupPage;