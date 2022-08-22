/**
 * @file Utility Context.
 * @author Shuto Iwasaki <https://github.com/iwasakishuto>
 * @copyright Shuto Iwasaki 2022
 * @license MIT
 * @reference <https://mui.com/components/snackbars/>
 */

import React, { createContext, useState } from "react";

import Alert from "@mui/material/Alert";
import type { AlertColor } from "@mui/material";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";

type SnackbarOriginVertical = "top" | "bottom";
type SnackbarOriginHorizontal = "left" | "center" | "right";

interface UtilityContextInterface {
  showAlertSnack: ({
    message,
    severity,
    vertical,
    horizontal,
  }: {
    message: string;
    severity?: AlertColor;
    vertical?: SnackbarOriginVertical;
    horizontal?: SnackbarOriginHorizontal;
  }) => void;
}

export const UtilityContext = createContext<UtilityContextInterface | undefined>(undefined);

type UtilityContextProps = { children: React.ReactNode };

export const UtilityContextProvider: React.FC<UtilityContextProps> = ({ children }) => {
  const [snackBarMessage, setSnackMessage] = useState<string>("");
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>("error");
  const [snackBarIsOpen, setSnackBarIsOpen] = useState<boolean>(false);
  const [snackBarPosVertical, setSnackBarPosVertical] = useState<SnackbarOriginVertical>("bottom");
  const [snackBarPosHorizontal, setSnackBarPosHorizontal] =
    useState<SnackbarOriginHorizontal>("left");

  /**
   * @summary Show SnackBar Alert Message.
   */
  const showAlertSnack = ({
    message,
    severity = "error",
    vertical = "bottom",
    horizontal = "left",
  }: {
    message: string;
    severity?: AlertColor;
    vertical?: SnackbarOriginVertical;
    horizontal?: SnackbarOriginHorizontal;
  }): void => {
    setSnackMessage(message);
    setAlertSeverity(severity);
    setSnackBarPosVertical(vertical);
    setSnackBarPosHorizontal(horizontal);
    setSnackBarIsOpen(true);
  };

  return (
    <UtilityContext.Provider
      value={{
        showAlertSnack,
      }}
    >
      {children}

      <Snackbar
        open={snackBarIsOpen}
        autoHideDuration={3000}
        anchorOrigin={{
          horizontal: snackBarPosHorizontal,
          vertical: snackBarPosVertical,
        }}
        TransitionComponent={(props) => <Slide {...props} direction="right" />}
        onClose={() => {
          setSnackBarIsOpen(false);
        }}
        className={snackBarIsOpen ? "" : "hidden"}
      >
        <Alert
          onClose={() => {
            setSnackBarIsOpen(false);
          }}
          severity={alertSeverity}
          className="w-full"
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </UtilityContext.Provider>
  );
};
