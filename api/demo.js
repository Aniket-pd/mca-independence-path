module.exports = function demoVideoRedirect(_request, response) {
  const demoVideoUrl = process.env.DEMO_VIDEO_URL?.trim();

  response.setHeader("Cache-Control", "no-store");

  if (demoVideoUrl) {
    response.redirect(307, demoVideoUrl);
    return;
  }

  response.status(200).setHeader("Content-Type", "text/html; charset=utf-8");
  response.end("<!doctype html><html lang=\"en\"><title>Demo video</title><body><p>Demo video coming soon.</p></body></html>");
};
