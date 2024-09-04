import {
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from "class-validator";
import isJSONValidator from "validator/lib/isJSON";

export function IsJSONValue(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: "IsJSONValue",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (value === undefined || value === null) {
            return false;
          }
          if (typeof value === "string") {
            return isJSONValidator(value);
          }
          try {
            return isJSONValidator(JSON.stringify(value));
          } catch (error) {
            return false;
          }
        },
        defaultMessage(args: ValidationArguments): string {
          return `${args.property} must be a valid json, Received: ${args.value}`;
        },
      },
    });
  };
}

// import {
//   ValidationArguments,
//   registerDecorator,
//   ValidationOptions,
// } from "class-validator";
// import isJSONValidator from "validator/lib/isJSON";

// export function IsJSONValue(validationOptions?: ValidationOptions) {
//   return function (object: Record<string, any>, propertyName: string) {
//     registerDecorator({
//       name: "IsJSONValue",
//       target: object.constructor,
//       propertyName: propertyName,
//       options: validationOptions,
//       validator: {
//         validate(value: any, args: ValidationArguments) {
//           // Handle undefined and null values explicitly
//           if (value === undefined || value === null) {
//             return false;
//           }

//           // Ensure the value is a string before passing it to the validator
//           if (typeof value === "string") {
//             return isJSONValidator(value);
//           }

//           // If the value is an object or array, stringify it
//           try {
//             const jsonString = JSON.stringify(value);
//             return isJSONValidator(jsonString);
//           } catch (error) {
//             // If stringification fails, it's not valid JSON
//             return false;
//           }
//         },
//         defaultMessage(args: ValidationArguments): string {
//           return `${args.property} must be a valid JSON`;
//         },
//       },
//     });
//   };
// }
