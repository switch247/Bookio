
"use client"
import { Fragment, useState, ChangeEvent,useMemo } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { Products } from './Products'
import { Loading } from "./Loading"

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories: any[] = [
    { name: 'Novels', href: '#' },
    { name: 'Fiction', href: '#' },
    { name: 'Nonfiction', href: '#' },
    { name: 'Bestsellers', href: '#' },
    { name: 'Classics', href: '#' },
]
const filters = [
    //   {
    //     id: 'color',
    //     name: 'Color',
    //     options: [
    //       { value: 'white', label: 'White', checked: false },
    //       { value: 'beige', label: 'Beige', checked: false },
    //       { value: 'blue', label: 'Blue', checked: true },
    //       { value: 'brown', label: 'Brown', checked: false },
    //       { value: 'green', label: 'Green', checked: false },
    //       { value: 'purple', label: 'Purple', checked: false },
    //     ],
    //   },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'fantasy', label: 'Fantasy', checked: false },
            { value: 'comedy', label: 'Comedy', checked: false },
            { value: 'romance', label: 'Romance', checked: false },
            { value: 'mystery', label: 'Mystery', checked: false },
            { value: 'science-fiction', label: 'Science Fiction', checked: false },
            { value: 'thriller', label: 'Thriller', checked: false },
            { value: 'horror', label: 'Horror', checked: false },
            { value: 'historical-fiction', label: 'Historical Fiction', checked: false },
            { value: 'biography', label: 'Biography', checked: false },
            { value: 'self-help', label: 'Self-Help', checked: false },
            { value: 'drama', label: 'Drama', checked: false },
            { value: 'adventure', label: 'Adventure', checked: false },
            { value: 'historical', label: 'Historical', checked: false },
            { value: 'poetry', label: 'Poetry', checked: false },
            { value: 'western', label: 'Western', checked: false },
            // { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            // { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: false },
            // { value: 'organization', label: 'Organization', checked: false },
            // { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    //   {
    //     id: 'size',
    //     name: 'Size',
    //     options: [
    //       { value: '2l', label: '2L', checked: false },
    //       { value: '6l', label: '6L', checked: false },
    //       { value: '12l', label: '12L', checked: false },
    //       { value: '18l', label: '18L', checked: false },
    //       { value: '20l', label: '20L', checked: false },
    //       { value: '40l', label: '40L', checked: true },
    //     ],
    //   },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

type CheckboxValue = string;

export function Result({ data }: { data: any }) {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)




    // const [checkedValues, setCheckedValues] = useState([]);

    // const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const { value, checked } = event.target;
    //     setCheckedValues((prevValues: any) => {
    //         if (checked) {
    //             // console.log("added")
    //             return [...prevValues, value];

    //         } else {
    //             // console.log("removed")
    //             return prevValues.filter((val: any) => val !== value);
    //         }
    //         return prevValues
    //     });
    //     console.log(checkedValues)
    // };

    const [category_check_list, setCategoryChecklist] = useState([]);
    const handleCheckboxChange = (e: any) => {
        const { value, checked } = event.target;
        if (checked == true) {
            setCategoryChecklist([...category_check_list, String(value)]);
        } else {
            let check_list = [];
            category_check_list.map(check => {
                if (String(check) != String(value)) {
                    check_list.push(String(check));
                }
            });
            setCategoryChecklist(check_list);
        }

    };

    var checked_category_id_list = category_check_list.join('+');

    // function hasCommonElements(a:string[], b:string[]) {
    //     if(!a && b.length<1) return true
    //     // if( !b || b.length<1) return true;
    //     return a && a.some(item => b.includes(item.toLowerCase()));
    // }
    function hasCommonElements(a:string[], b:string[]) {
        if(!a && b.length<1) return true;
        if( !b || b.length<1) return true;
        const threshold = Math.ceil(a.length * 0.75);
        let count = 0;
      
        const lowerCaseB = b.map(item => item.toLowerCase());
      
        for (const item of a) {
          if (lowerCaseB.includes(item.toLowerCase())) {
            count++;
            if (count >= threshold) {
              return true;
            }
          }
        }
      
        return false;
      }
    
    const filteredData = useMemo(()=>{
        return data && (data as any[]).filter( (item) => {
            const x = item.volumeInfo.categories? item.volumeInfo.categories: []
            return item && hasCommonElements(x, category_check_list)
        });
    },[ category_check_list ])
    

    // console.log(typeof(filteredData),filteredData)
    
    return (

        <div className="lg:mx-10 w-[80vw] ">
            {/* bg-white */}
            {checked_category_id_list}
            <div>
                {/* Mobile filter dialog */}
                <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form className="mt-4 border-t border-gray-200">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                                            {subCategories.map((category) => (
                                                <li key={category.name}>
                                                    <a href={category.href} className="block px-2 py-3">
                                                        {category.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>

                                        {filters.map((section) => (
                                            <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                                    ) : (
                                                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-6">
                                                                {section.options.map((option, optionIdx) => (
                                                                    <div key={option.value} className="flex items-center">
                                                                        <input
                                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            defaultValue={option.value}
                                                                            type="checkbox"
                                                                            defaultChecked={option.checked}
                                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                        >
                                                                            {option.label}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>
                {/* 7xl */}
                <main className="mx-auto max-w-100vw px- sm:px-6 lg:px-0">
                    <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
                        <h1 className="ml-2 text-4xl font-bold tracking-tight text-900">Results</h1>

                        <div className="flex items-center">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-700 hover:text-900">
                                        Sort
                                        <ChevronDownIcon
                                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-400 group-hover:text-gray-500"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md  shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <Menu.Item key={option.name}>
                                                    {({ active }) => (
                                                        <a
                                                            href={option.href}
                                                            className={classNames(
                                                                option.current ? 'font-medium text-red-800 bg-red-300' : 'text-red-500',
                                                                active ? 'bg-100' : '',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            {option.name}
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>

                            <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                <span className="sr-only">View grid</span>
                                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                onClick={() => setMobileFiltersOpen(true)}
                            >
                                <span className="sr-only">Filters</span>
                                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <section aria-labelledby="products-heading" className="pb-24 pt-6 w-full">
                        <h2 id="products-heading" className="sr-only">
                            Search Results
                        </h2>
                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-6 items-start">
                            {/* Filters */}
                            <form className="hidden lg:block lg:col-span-1 lg:pt-10">
                                <h3 className="sr-only">Categories</h3>
                                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-900">
                                    {subCategories.map((category) => (
                                        <li key={category.name}>
                                            <a href={category.href}>{category.name}</a>
                                        </li>
                                    ))}
                                </ul>

                                {filters.map((section) => (
                                    <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                                        {({ open }) => (
                                            <>
                                                <h3 className="-my-3 flow-root">
                                                    <Disclosure.Button className="flex w-full items-center justify-between  py-3 text-sm text-400 hover:text-gray-500">
                                                        <span className="font-medium text-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                            ) : (
                                                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </h3>
                                                <Disclosure.Panel className="pt-6">
                                                    <div className="space-y-4">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div key={option.value} className="flex items-center">
                                                                <input
                                                                    onChange={handleCheckboxChange}
                                                                    id={`filter-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    defaultValue={option.value}
                                                                    type="checkbox"
                                                                    defaultChecked={option.checked}
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                                                    className="ml-3 text-sm text-600"
                                                                >
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </form>

                            {/* Product grid */}
                            <div className="lg:col-span-5">{/* Your content */}
                                {filteredData && filteredData.length > 0 ? <Products data={filteredData} /> :
                                    <div className='h-full flex flex-col align-center justify-center text-center'>
                                        <img src="notfound.png" alt="" />
                                        <p>NOT FOUND</p>
                                    </div>
                                }

                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
