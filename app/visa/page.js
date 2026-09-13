import { redirect } from 'next/navigation';

export default function VisaRedirectPage() {
  redirect('/passport');
}
