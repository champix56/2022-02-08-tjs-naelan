import {
  Document,
  Page,
  PDFDownloadLink,
  PDFViewer,
  View,
} from "@react-pdf/renderer";
import React from "react";

import MemeSvgViewerPDF from "../ui/MemeSvgViewerPDF/MemeSvgViewerPDF";

const MemePDFSvgRenderer = (props) => {
  console.log(props);
  return (
    <div className="MEMEPdfSvgRender" data-testid="MemePDFSvgRenderer">
      <h3>{props.meme.title}</h3>
      <br />
      <PDFViewer height={'300px'}>
        <TemplatePDF meme={props.meme} />
      </PDFViewer>
      <br />
      <PDFDownloadLink
        document={<TemplatePDF meme={props.meme} />}
        fileName={props.meme.title + ".pdf"}
      >
        telecharger {props.meme.title}
      </PDFDownloadLink>
    </div>
  );
};

function TemplatePDF(props) {
  console.log(props);
  return (
    <Document>
      <Page size="A4" orientation="landscape">
        <View style={{ alignItems: "center" }}>
          <MemeSvgViewerPDF meme={props.meme} />
        </View>
      </Page>
    </Document>
  );
}

export default MemePDFSvgRenderer;
