# MongoDB $inc Operator Bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB.
The bug arises from incorrect usage of the operator, leading to unexpected or incorrect updates. The solution shows how to correctly use the `$inc` operator to achieve the desired outcome.
## Bug Description
The original code attempts to increment a field that might not exist, or might not be a number resulting in an error or incorrect update.
## Solution
The solution addresses the issue by first ensuring the field exists and is a number.  It uses the $setOnInsert operator to initialize the field if it does not exist, making sure the field's type is suitable for the $inc operation.