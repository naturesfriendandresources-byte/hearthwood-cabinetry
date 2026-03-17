# Add the 3 admin videos (this bite)

The portal is set up for **admin-1**, **admin-2**, and **admin-3**. Add the files here so the Administration block plays video instead of showing "Video not in portal yet."

---

## Files to add

| Save as         | Module title                    |
|-----------------|----------------------------------|
| **admin-1.mp4** | Company Values & Safety          |
| **admin-2.mp4** | Communication & Scheduling       |
| **admin-3.mp4** | Quality & Client Experience     |

**Folder:** this folder — `hearthwood-cabinetry/staff/videos/`

---

## How to get the files

- **If you have the files:** Copy `admin-1.mp4`, `admin-2.mp4`, `admin-3.mp4` into this folder.
- **If the source is YouTube** (and you have the right to rehost), you can use **yt-dlp**:
  - admin-1: `yt-dlp -o admin-1.mp4 "https://www.youtube.com/watch?v=g6zYF7fbJk8"`
  - admin-2: `yt-dlp -o admin-2.mp4 "https://www.youtube.com/watch?v=CtRgwJaW2N4"`
  - admin-3: `yt-dlp -o admin-3.mp4 "https://www.youtube.com/watch?v=Sw61Uu8ftII"`
  - Then move the downloaded files into `staff/videos/`.

Only rehost content you have rights to use.

---

## After adding

1. From the **hearthwood-cabinetry** repo:  
   `git add staff/videos/admin-1.mp4 staff/videos/admin-2.mp4 staff/videos/admin-3.mp4`  
   (or `git add staff/videos/` if that’s all you changed.)
2. Commit and push. Netlify will serve them at  
   `hearthwoodcabinetry.com/staff/videos/admin-1.mp4` (and 2, 3).
3. Refresh the training page; the video player will load the file.

---

**Full manifest:** See **VIDEO-MANIFEST.md** in this folder for all tracks (Mozaik, Designer, CNC, Field). This doc is just for the 3 admin videos.
