echo "Running pre-commit hook"
./scripts/run-tests.bash

if [ $? -ne 0 ]; then
 echo "Code check failed!"
 exit 1
fi