import { FC } from "react";
import { FieldProps } from "../../index";
import { FieldItemProps } from "../Types";
export interface PlainTextFieldProps extends FieldItemProps {
    isTextHtmlString?: boolean;
    text: string | JSX.Element;
}
export interface PlainTextProps extends FieldProps {
    fieldProps?: PlainTextFieldProps;
}
export declare const PlainText: FC<PlainTextProps>;
