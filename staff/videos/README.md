# Training videos — hosted in the portal

All training videos **live here**. Team watches from our portal only — no redirect to YouTube, Mozaik, or Shopsabre.

**Full checklist:** See **VIDEO-MANIFEST.md** in this folder for every video (Admin, Mozaik, Designer, CNC/Warehouse, Field manager). Use it before push to confirm nothing is missing.

## Admin (required for this push)

| File        | Module                      |
|------------|-----------------------------|
| admin-1.mp4 | Company Values & Safety     |
| admin-2.mp4 | Communication & Scheduling  |
| admin-3.mp4 | Quality & Client Experience |

## Adding a video

1. Get the video file (your own recording, or a copy you have rights to rehost).
2. Save it here with the correct name (e.g. `admin-1.mp4`). Use `.mp4` or `.webm` for best browser support.
3. Commit and push. Netlify will serve it at `hearthwoodcabinetry.com/staff/videos/admin-1.mp4`.

## Getting a copy from a link

If the source is a link (e.g. YouTube) and you have permission to rehost:

- **yt-dlp** (recommended):  
  `yt-dlp -o admin-1.mp4 "https://www.youtube.com/watch?v=XXXXX"`  
  Then move the file into this folder.

You are responsible for having the right to host the file. Do not rehost copyrighted content without permission.

## Large files

If the repo gets too large, use Git LFS for `*.mp4` in this folder, or host files on Netlify Large Media / S3 and point the curriculum at the URL (portal still uses `<video src="...">` so playback stays in-portal).
