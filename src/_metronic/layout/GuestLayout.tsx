import { useEffect } from 'react';
import { toAbsoluteUrl } from '../helpers';


export function GuestLayout({children}: {children: React.ReactNode}) {
  useEffect(() => {
    document.body.classList.add('bg-white');
    return () => {
      document.body.classList.remove('bg-white');
    };
  }, []);

  return (
    <div
      className="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
      style={{
        backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/sketchy-1/14.png')})`,
      }}
    >
      {/* begin::Content */}
      <div className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
        {/* begin::Logo */}
        <a href="#" className="mb-12">
          <img alt="Logo" src={toAbsoluteUrl('/media/logos/logo-1.svg')} className="h-45px" />
        </a>
        {/* end::Logo */}
        {/* begin::Wrapper */}
        <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
            {children}
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Content */}
      {/* begin::Footer */}
      <div className="d-flex flex-center flex-column-auto p-10">
        <div className="d-flex align-items-center fw-bold fs-6">
          <a href="#" className="text-muted text-hover-primary px-2">
            About
          </a>
          <a href="#" className="text-muted text-hover-primary px-2">
            Contact
          </a>
          <a href="#" className="text-muted text-hover-primary px-2">
            Contact Us
          </a>
        </div>
      </div>
      {/* end::Footer */}
    </div>
  );
}
