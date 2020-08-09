import React from 'react';

function SessionLength(props) {
    function decreaseCounter() {
        if (props.sessionLength === 1) {
            return;
        }

        props.decreaseSession();
    }

    function increaseCounter() {
        if (props.sessionLength === 60) {
            return;
        }

        props.increaseSession();
    }

    return (
        <section>
            <h4>Session Length</h4>
            <section className="interval-container">
                <button disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={decreaseCounter}>Down</button>
                <p className="interval-length">{props.sessionLength}</p>
                <button disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={increaseCounter}>Up</button>
            </section>
        </section>
        
    );
}

export default SessionLength;