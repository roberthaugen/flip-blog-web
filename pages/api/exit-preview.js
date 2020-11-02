

export default function exitPreview(__, res) {
    res.clearPreviewData();
    res.writeHead(307, {Location: '/'});
    res.end();
}