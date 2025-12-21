const SettingsPage = () => {
  return (
    <div className="p-6 z-10 max-w-xl">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="mt-6 space-y-4">
        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
          <h3 className="font-medium">Profile</h3>
          <p className="text-sm text-gray-400">
            Update your personal preferences.
          </p>
        </div>

        <div className="bg-white/5 p-4 rounded-lg border border-white/10">
          <h3 className="font-medium">Notifications</h3>
          <p className="text-sm text-gray-400">
            Manage alerts and reminders.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
