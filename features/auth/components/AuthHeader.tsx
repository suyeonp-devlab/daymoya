interface AuthHeaderProps {
  title: string;
  description?: string;
}

export default function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <div>
      <p className="text-sm font-semibold text-violet-600">
        DAYMOYA
      </p>
      <h1 className="mt-3 text-3xl font-bold text-zinc-900">
        {title}
      </h1>
      {description && (
        <p className="mt-2 text-sm text-zinc-500">
          {description}
        </p>
      )}
    </div>
  );
}