interface ErrorNotificationProps {
  message: string;
}

export const ErrorNotification: React.FC<ErrorNotificationProps> = ({
  message,
}) => {
  return (
    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded mt-4">
      {message}
    </div>
  );
};
