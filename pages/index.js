import Head from 'next/head'
import { BsFillMoonStarsFill, BsWhatsapp } from 'react-icons/bs'
import {
	AiFillLinkedin,
	AiOutlineInstagram,
	AiOutlineWhatsApp,
} from 'react-icons/ai'
import Image from 'next/image'
import design from '../public/design.png'
import code from '../public/code.png'
import dp from '../public/profile.png'
import consulting from '../public/consulting.png'
import hibye from '../public/hibye.png'
import tapin from '../public/tapin.png'
import bank from '../public/bank-app.png'
import figma from '../public/figma-logo.png'
import photoshop from '../public/Photoshop.png'
import illustrator from '../public/Illustrator.png'
import vscode from '../public/vscode.png'
import qrcode from '../public/qr.jpeg'
import { useState } from 'react'

export default function Home() {
	const [darkMode, setDarkMode] = useState(true)

	return (
		<>
			<div className={darkMode ? 'dark' : ''}>
				<Head>
					<title>Joel Adu-Kwarteng</title>
					<meta
						name="description"
						content="Generated by create next app"
					/>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<main className="px-10 md:px-20 lg:px-40 dark:bg-gray-900">
					<section className="min-h-screen">
						<nav className="py-10 mb-12 flex justify-between">
							<a href="#">
								<h1 className="text-xl font-burtons dark:text-white">
									joelak
								</h1>
							</a>
							<ul className="flex items-center">
								<li>
									<BsFillMoonStarsFill
										onClick={() =>
											setDarkMode(!darkMode)
										}
										className=" cursor-pointer text-2xl dark:text-white"
									/>
								</li>
								<li>
									<a
										className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
										href="https://drive.google.com/file/d/1APorws8dqagj2BfnjMq5RboI1m-e89M0/view?usp=sharing"
										target="__blank">
										Resume
									</a>
								</li>
							</ul>
						</nav>

						<div className="text-center p-10">
							<h2 className="text-5xl py-2 text-teal-600 font-medium">
								Joel Adu-Kwarteng
							</h2>
							<h3 className="text-xl py-2 text-teal-900">
								Passionate Developer | Creative Problem
								Solver | Lifelong Learner
							</h3>
							<p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto dark:text-gray-300">
								Looking to breathe life into your
								digital dreams? As a passionate
								developer, I offer a symphony of
								services that blend innovation,
								efficiency, and elegance.
							</p>
						</div>

						<div className=" bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 relative mx-auto overflow-hidden md:w-96 md:h-96">
							<Image
								src={dp}
								layout="fill"
								objectFit="cover"
							/>
						</div>
					</section>

					<section>
						<div>
							<h3 className="text-3xl py-4 mt-16 text-center text-teal-600">
								Services I offer
							</h3>
							<p className="text-xl py-2 leading-8 text-gray-800 dark:text-gray-300 max-w-2xl mx-auto text-center">
								I create beautiful, simplistic, but most
								importantly, functional websites that
								meet the needs and functional
								requirements of the client. I also offer
								services to help improve existing
								websites and other digital platforms.
							</p>
						</div>

						<div className="lg:flex gap-10 dark:text-gray-300 text-md">
							<div className="text-center shadow-lg p-10 rounded-xl my-10">
								<div className="w-20 h-20 mt-20 relative mx-auto">
									<Image src={design} alt="dev ed" />
								</div>
								<h3 className="text-2xl pt-8 pb-2 text-teal-600">
									Beautiful Designs
								</h3>
								<p className="py-2 text-lg">
									I craft visually stunning websites
									that captivate visitors from the
									first glance.
								</p>
							</div>

							<div className="text-center shadow-lg p-10 rounded-xl my-10">
								<div className="w-20 h-20 mt-20 relative mx-auto">
									<Image src={code} alt="dev ed" />
								</div>
								<h3 className="text-2xl pt-8 pb-2 text-teal-600">
									Efficient Coding
								</h3>
								<p className="py-2 text-lg">
									I pride myself on writing clean,
									optimized code that powers
									high-performance websites.
								</p>
							</div>

							<div className="text-center shadow-lg p-10 rounded-xl my-10">
								<div className="w-20 h-20 mt-20 relative mx-auto">
									<Image
										src={consulting}
										alt="dev ed"
									/>
								</div>
								<h3 className="text-2xl pt-8 pb-2 text-teal-600">
									User Experience
								</h3>
								<p className="py-2 text-lg">
									I create effortless journeys,
									smooth interactions, and intuitive
									navigation.
								</p>
							</div>
						</div>

						<div className="text-center">
							<h4 className="text-teal-600 py-4 text-3xl">
								Tools I use
							</h4>
							<div className="flex flex-col md:flex-row ">
								<div className="mx-auto relative my-10">
									<Image
										src={figma}
										height={80}
										color="gray"
									/>
								</div>

								<div className="mx-auto relative my-10">
									<Image
										src={photoshop}
										height={80}
										color="gray"
									/>
								</div>

								<div className="mx-auto relativ my-10">
									<Image
										src={illustrator}
										height={80}
										color="gray"
									/>
								</div>

								<div className="mx-auto relative my-10">
									<Image
										src={vscode}
										height={80}
										color="gray"
									/>
								</div>
							</div>
						</div>

						<div>
							<h3 className="text-3xl py-4 mt-20 text-center text-teal-600">
								Portfolio
							</h3>
							<p className="text-lg py-2 leading-8 text-gray-400 text-center">
								Welcome to my portfolio! I am a
								passionate individual with a flair for
								design and problem-solving.
							</p>
						</div>

						<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
							<div className="basis-1/3 flex-1 shadow-xl drop-shadow-lg rounded-xl">
								<a
									href="https://whatsapp-v2-ochre.vercel.app"
									target="__blank">
									<Image
										src={hibye}
										className="rounded-xl"
										width={'100%'}
										height={'100%'}
									/>
								</a>
							</div>

							<div className="basis-1/3 flex-1 shadow-xl drop-shadow-lg">
								<a
									href="https://linkedin-d57df.web.app"
									target="__blank">
									<Image
										src={tapin}
										className="rounded-xl"
										width={'100%'}
										height={'100%'}
									/>
								</a>
							</div>
							<div className="basis-1/2 text-center shadow-xl drop-shadow-lg">
								<a
									href="https://github.com/Joelisking/modern-bank-app"
									target="__blank">
									<Image
										src={bank}
										className="rounded-xl"
										width={800}
									/>
								</a>
							</div>
						</div>
					</section>

					<section className="pb-20">
						<div>
							<h3 className="text-5xl py-2 mt-10 text-center text-teal-600 font-medium font-architect">
								LET'S MAKE YOUR DREAMS COME ALIVE
							</h3>
							<h3 className="text-3xl pb-8 text-center text-black font-medium font-architect dark:text-white">
								It's now or never
							</h3>
							<div className="flex flex-col items-center justify-center mb-11">
								<a
									href="mailto:joeladukwarteng@gmail.com"
									target="__blank">
									<button class=" my-4 inline-flex p-0.5 text-3xl text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-teal-600 group-hover:from-teal-300 group-hover:to-teal-600 dark:text-white dark:hover:text-gray-900 focus:outline-none">
										<span class="relative px-10 py-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
											Contact Me
										</span>
									</button>
								</a>
								<div className=" mt-7">
									<div className="relative box w-[200px] h-[200px] mt-10 text-center overflow-hidden"></div>
									<Image
										src={qrcode}
										width={350}
									/>
								</div>
							</div>
						</div>
					</section>
				</main>
				{/* <footer class="bg-white dark:bg-gray-800 ">
					<div class="p-4 md:flex md:items-center md:justify-between">
						<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
							2023{' '}
							<a
								href="https://flowbite.com/"
								class="hover:underline">
								Joel Adu-Kwarteng
							</a>
							
						</span>
						<ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 text-center">
							<li>
								<a
									href="https://www.linkedin.com/in/joel-adu-kwarteng-919048208/"
									target="__blank">
									<div className="text-5xl flex justify-center gap-16 p-3 text-gray-600 dark:text-gray-400">
										<AiFillLinkedin />
									</div>
								</a>
							</li>
							<li>
								<a
									href="https://wa.me/message/YFJDPDJWJPJ5D1"
									target="__blank">
									<div className="text-5xl flex justify-center gap-16 p-3 text-gray-600 dark:text-gray-400">
										<AiOutlineWhatsApp />
									</div>
								</a>
							</li>
							<li>
								<a
									href="https://www.linkedin.com/in/joel-adu-kwarteng-919048208/"
									target="__blank">
									<div className="text-5xl flex justify-center gap-16 p-3 text-gray-600 dark:text-gray-400">
										<AiOutlineInstagram />
									</div>
								</a>
							</li>
						</ul>
					</div>
				</footer> */}
			</div>
		</>
	)
}
