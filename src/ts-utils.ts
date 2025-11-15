type User = {
  name: string;
  age: number;
  profilePic?: string;
};

// Only need to provide the name and age
// Will use User objects normally
type UserNameAge = Pick<User, "name" | "age">;

// Create a type and omit a property
type UserWithoutPic = Omit<User, "profilePic">;

// Make all props required
type UserWithRequiredProps = Required<User>;

// Sets all properties optional
type UserWithOptionalProps = Partial<User>;

// All properties must be of type string
type T = Record<PropertyKey, string>;

type Admin = "admin";

type Role = Admin | "user" | "moderator";
type OtherRole = "testing" | Admin | "user";

// Extract specific types
type Extracted = Extract<Role, OtherRole>;

// The opposite of extract
type Excluded = Exclude<Role, "user">;

function getUser(id: string) {
  return { name: "Eddy" };
}

// Returns the type from something (such as a function)
// Useful if using a library that does not expose it's types
type ReturnedType = ReturnType<typeof getUser>;

class SomeClassA {
  constructor(param1: string) {
    console.log("do nothing", param1);
  }
}

// const inst: SomeClassA = new SomeClassA("string")

// Returns an array containing the parameters of a function
type TuppleType = Parameters<typeof getUser>;

// Returns an array containing the parameters of a class
type ClassType = ConstructorParameters<typeof SomeClassA>;

const tuppleTest: TuppleType = ["12345"];

async function getUSerAsync(id: string) {
  return Promise.resolve({ id: "12345" });
}

type awaited = Awaited<ReturnType<typeof getUSerAsync>>;
