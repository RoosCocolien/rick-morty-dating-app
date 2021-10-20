import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body, body *", {
  boxSizing: 'border-box',
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  color: 'inherit',
  padding: 0,
  margin: 0,
})