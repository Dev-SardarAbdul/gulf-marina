import { makeStyles } from "@mui/styles";

export const tableStyles = makeStyles({
  tableContainer: {
    background: "#fafafa",
  },
  tableHeaderCell: {
    fontStyle: "normal",
    fontWeight: "500 !important",
    fontSize: "16px !important",
    lineHeight: "19px",
    letterSpacing: " 0.05em !important",
    color: "#000000",
    fontFamily: "Inter, sans-serif !important",
    borderLeft: "1px solid rgba(224, 224, 224, 1)",
    textAlign: "center !important",
  },
  tableBodyCell: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: " 0.05em",
    color: "#000000",
    fontFamily: "Inter, sans-serif",
    borderLeft: "1px solid rgba(224, 224, 224, 1)",
  },
});
