import React from "react";
import { ErrorBox } from "./error-display.styled";
import { connect } from "react-redux";

export const ErrorDisplayComponent = ({ error }) => (
  <React.Fragment>{error && <ErrorBox>{error}</ErrorBox>}</React.Fragment>
);

const mapStateToProps = ({ persons: { error } }) => ({
  error,
});

export const ErrorDisplay = connect(mapStateToProps)(ErrorDisplayComponent);
