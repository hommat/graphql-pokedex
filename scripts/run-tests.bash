set -e

cd "${0%/*}/.."

echo "Checking linting"
yarn lint

echo "Running tests"
yarn test-check