import type { Group, GroupInsert, GroupUpdate } from "../../types";
export declare function generateGroupId(): string;
export declare function getGroup(groupId: string): Promise<Group | null>;
export declare function getGroups(groupIds: string[]): Promise<Group[]>;
export declare function getAllUsersGroups(userId: string): Promise<Group[]>;
export declare function createGroup(groupInsert: GroupInsert): Promise<Group>;
export declare function setGroups(groups: Group[]): Promise<boolean>;
export declare function createGroups(groupInserts: GroupInsert[]): Promise<Group[]>;
export declare function updateGroup(groupId: string, updates: GroupUpdate): Promise<boolean>;
export declare function deleteGroup(groupId: string): Promise<boolean>;
export declare function deleteGroups(groupIds: string[]): Promise<boolean>;
export declare function getGroupChanges(userId: string, addGroup: (group: Group) => void, modifyGroup: (group: Group) => void, removeGroup: (id: string) => void): void;
