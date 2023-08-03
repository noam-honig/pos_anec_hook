import { useEffect, useState } from "react";
import { UserSettings } from "../models/user-settings";
import { remult } from "remult";

export const useUserSettings = (key: keyof UserSettings, initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const userSettingsRepo = remult.repo(UserSettings);
  //const session = useSession();
  const userId = "test-id";

  useEffect(() => {
    const set = async () => {
      const userSettings = await userSettingsRepo.findFirst({
        user: { $id: userId },
      });

      if (userSettings && userSettings[key]) {
        setValue(userSettings[key]);
      }
    };
    set();
  }, [userId, key, userSettingsRepo]);

  useEffect(() => {
    const save = async () => {
      const userSettings = await userSettingsRepo.findFirst({
        user: { $id: userId },
      });

      if (userSettings) {
        await userSettingsRepo.save({
          ...userSettings,
          [key]: value,
        });
      } else {
        await userSettingsRepo.save({
          [key]: value,
        });
      }
    };
    save();
  }, [userId, key, value, userSettingsRepo]);

  return [value, setValue];
};
