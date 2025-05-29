export default function Footer() {
    return (
      <footer className="bg-deepGreen text-baseTan py-6 mt-12">
        <div className="max-w-7xl mx-auto text-center text-sm">
          © {new Date().getFullYear()} TheScottish3D. All rights reserved.
        </div>
      </footer>
    );
  }