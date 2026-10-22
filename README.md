
# BRFC ID Calculator

Easily calculate BRFC IDs for your specifications on the web

We've deployed this repo at [brfc-id.babbage.systems](https://brfc-id.babbage.systems) :)

## Development Instructions

Clone the repo, then run `npm i` to install packages.

To start the live development server on `localhost:3000`, run `npm run start`.

Your browser should automatically open, and your changes should be reflected on-screen whenever you reload.

## License

The license for the code in this repository is the Open BSV License.


## October2026 build runtime maintenance

Build qualification uses patched Node22.23.4 and the frozen historical lock;
`--legacy-peer-deps` retains the original npm6 peer-resolution contract.
Application dependency versions and public client compatibility are unchanged.
The obsolete Cloud Run workflow is retained only as a non-executable reference
at `docs/legacy-cloud-run-deploy.yaml.txt`; this update does not restore a legacy
service or publish a browser bundle.
