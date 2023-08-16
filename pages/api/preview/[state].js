export default function handler(req, res) {
  if (req?.query?.state === "on") {
    res.setPreviewData({});
    res.end("Preview mode enabled");
  } else {
    res.clearPreviewData();
    res.end("Preview mode disabled");
  }
}
