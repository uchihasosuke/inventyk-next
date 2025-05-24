export function Footer() {
  return (
    <footer className="border-t py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Inventyk. All rights reserved.</p>
        <p className="mt-1">Innovating the Future, Together.</p>
      </div>
    </footer>
  );
}
