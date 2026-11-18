# Ponzo experiment: online version

Participants open one public link, do the experiment in their own browser, and their data is written to a
Google Sheet that only the research group can see.

| File | What it is | Do you edit it? |
| --- | --- | --- |
| `index.html` | The experiment page | No |
| `config.js` | Script address, study token, contact email, open/closed switch | Yes |
| `Code.gs` | The Google Apps Script that receives the data | Only the `STUDY_TOKEN` line |

Setup takes about 30 minutes: follow the setup guide step by step (Sheet + script, GitHub Pages, connect, pilot test).

Link options:

- `?pilot=1` runs a short test version (19 screens), marked `pilot` in the data and kept out of the counts.
- `?mode=lab` is for sessions on a group computer: it shows a "Next participant" button at the end.
- `?src=name` tags where a participant came from (for example `?src=classA`).

Version 3.0.0. Don't change `index.html`, `studyId`, `barDeg` or `flushEvery` once data collection has started.
