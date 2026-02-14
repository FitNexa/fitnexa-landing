# Vercel Setup

## GitHub Secrets

Add these to your GitHub repository (Settings → Secrets and variables → Actions):

| Secret | Description |
|--------|-------------|
| `VERCEL_TOKEN` | Vercel API token |
| `VERCEL_ORG_ID` | Your Vercel team/org ID |
| `VERCEL_PROJECT_ID_LANDING` | Project ID for fitnexa-landing (create project in Vercel first, then link) |

## Deploy

Push to `main` or `master` to trigger the workflow, or run manually via Actions → Deploy Landing to Vercel → Run workflow.
