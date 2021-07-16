import { Variant } from "@material-ui/core/styles/createTypography";
import { TypographyProps } from "@material-ui/core/Typography";

export interface NavbarProps {
  id?: string;
}

export interface NavTileProps extends TypographyProps {
  id?: string;
  title: string;
  link: string;
  variant?: Variant;
}
