import { Fragment } from "react";
import reactDom from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.closeModal} />;
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalDiv = document.getElementById("overlays");

const Modal = (props) => {
    return (
        <Fragment>
            {reactDom.createPortal(
                <Backdrop closeModal={props.closeModal} />,
                portalDiv
            )}
            {reactDom.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalDiv
            )}
        </Fragment>
    );
};

export default Modal;
