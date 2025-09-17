export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex h-14 items-center justify-center px-4 text-center md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Siyanda Dhlamini. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
