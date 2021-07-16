import { isError } from "lodash";
import { unknownErrorMsg } from "./constants";
import { ErrorBoundaryState, ErrorBoundaryProps } from "./types";
import { Component, ErrorInfo, GetDerivedStateFromError } from "react";

export default class RootErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError: GetDerivedStateFromError<
    ErrorBoundaryProps,
    ErrorBoundaryState
  > = (error: any) => {
    return {
      hasError: !!error,
      errorMessage: isError(error)
        ? error.message || unknownErrorMsg
        : error || undefined,
    };
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    return this.props.children;
  }
}
