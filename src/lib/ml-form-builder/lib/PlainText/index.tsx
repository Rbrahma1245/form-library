import React, { FC } from "react";
import { FieldProps } from "../../index";
import clsx from "clsx";
import { FieldItemProps } from "../Types";


export interface PlainTextFieldProps extends FieldItemProps{
  isTextHtmlString?: boolean;
  text: string | JSX.Element;
  
}

export interface PlainTextProps extends FieldProps {
  fieldProps?: PlainTextFieldProps;
}

export const PlainText: FC<PlainTextProps> = (props) => {
  const { fieldProps = {} as PlainTextFieldProps } = props;
  const {
    isTextHtmlString = false,
    text = "",
    classNames ="",
    nativeProps,
    disabled
  } = fieldProps;
  return (
    <>
      {isTextHtmlString && typeof text === "string" ? (
        <div className={clsx( classNames) } dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <div className={clsx("plaintext-field", classNames)} 
        disabled={disabled}
        {...nativeProps}
        >
            {text}
        </div>
      )}
    </>
  );
};

