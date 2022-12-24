import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props) {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
        <Link href='/' className='text-white flex items-center'>
          <ArrowUturnLeftIcon className='h-6 w-6 text-white mr-2' />
          Back to the site
        </Link>
        <div>
          <p className=' text-white'>hello on swistoklik studio</p>
        </div>
      </div>

      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
