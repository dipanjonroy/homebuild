"use client";

import { SlCalender } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import {
  FiCalendar,
  FiUserCheck,
  FiShield,
  FiClock,
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiLayers,
  FiDollarSign,
  FiMapPin,
  FiVideo,
  FiHome,
} from "react-icons/fi";
import { useModalStore } from "@/store/ModalStore";
import { useState } from "react";
import Image from "next/image";
import Input from "../ui/Input";
import PrimaryButton from "../ui/buttons/PrimaryButton";
import Select from "../ui/Select";
import SelectCalender from "../ui/SelectCalender";
import { isEmpty } from "@/helpers/FormValidator";
import { toast } from "../toast/toast";

interface MeetingFormTypes {
  personalDetails: {
    fullName: string;
    email: string;
    phone: string;
  };
  projectDetails: {
    projectType: string;
    projectBudget: string;
    projectZipCode: string;
  };
  meetingDetails: {
    meetingMethod: string;
    meetingDate: Date | null;
    meetingTime: string;
  };
}

const steps: string[] = ["About You", "About Your Project", "Schedule"];

const detailsTitle = [
  {
    heading: "Let's start with your details",
    text: "So we can get in touch with you.",
  },
  {
    heading: "Tell us about your project",
    text: "A few details will help us understand your needs.",
  },
  {
    heading: "Choose a convenient time",
    text: "Select how and when you'd like to talk.",
  },
];

const leftSideTexts = [
  {
    icon: <FiCalendar />,
    text: "100% Free Consultation",
  },
  {
    icon: <FiUserCheck />,
    text: "Experienced Professionals",
  },
  {
    icon: <FiShield />,
    text: "Quality You Can Trust",
  },
  {
    icon: <FiClock />,
    text: "On-time, On-budget",
  },
];

const projectTypes = [
  {
    label: "New Construction",
    value: "new-construction",
  },

  {
    label: "Home Renovation",
    value: "home-renovation",
  },

  {
    label: "Home Addition",
    value: "home-addition",
  },

  {
    label: "Kitchen & Bathroom",
    value: "kitchen-bathroom",
  },

  {
    label: "Commercial",
    value: "commercial",
  },
];

const budgetOptions = [
  { label: "Under $50K", value: "under-50k" },
  { label: "$50K - $100K", value: "50k-100k" },
  { label: "$100K - $250K", value: "100k-250k" },
  { label: "$250K+", value: "250k-plus" },
];

const consultationMethod = [
  {
    label: "Phone",
    value: "phone",
    icon: <FiPhone />,
  },
  {
    label: "Video",
    value: "video",
    icon: <FiVideo />,
  },
  {
    label: "In Person",
    value: "in-person",
    icon: <FiHome />,
  },
];

const timeOptions = [
  { label: "9:00 AM", value: "09:00" },
  { label: "10:00 AM", value: "10:00" },
  { label: "11:00 AM", value: "11:00" },
  { label: "12:00 PM", value: "12:00" },
  { label: "1:00 PM", value: "13:00" },
  { label: "2:00 PM", value: "14:00" },
  { label: "3:00 PM", value: "15:00" },
  { label: "4:00 PM", value: "16:00" },
  { label: "5:00 PM", value: "17:00" },
];

export default function BookingModal() {
  const { closeModal } = useModalStore();

  const [step, setStep] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<MeetingFormTypes>({
    personalDetails: {
      fullName: "",
      email: "",
      phone: "",
    },
    projectDetails: {
      projectType: "",
      projectBudget: "",
      projectZipCode: "",
    },
    meetingDetails: {
      meetingMethod: "",
      meetingDate: null,
      meetingTime: "",
    },
  });

  const [emptyErrors, setEmptyErrors] = useState({
    fullName: false,
    email: false,
    phone: false,
    projectType: false,
    projectBudget: false,
    projectZipCode: false,
    meetingMethod: false,
    meetingDate: false,
    meetingTime: false,
  });

  // Handle update form data
  const updateFormData = <T extends keyof MeetingFormTypes>(
    type: T,
    key: keyof MeetingFormTypes[T],
    value: unknown,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [key]: value,
      },
    }));
  };

  const handelSubmit = () => {
    const { personalDetails, projectDetails, meetingDetails } = formData;
    // Validate form
    if (isEmpty(personalDetails.fullName)) {
      setEmptyErrors((prev) => ({
        ...prev,
        fullName: true,
      }));
      toast.error("Please enter your fullname.")
      return;
    }
    setSubmitted(true);
  };

  const nextStep = () => {
    if (step < 2) {
      setStep((prev) => prev + 1);
    } else {
      // Form submit
      handelSubmit();
    }
  };

  const backStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex-center">
      <div className="relative w-full h-full max-w-250 p-8 white-bg rounded-xl">
        {/* Close Modal */}
        <button
          onClick={closeModal}
          className="absolute right-8 top-8 cursor-pointer"
        >
          <RxCross1 className="black-text text-xl" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-full bg-(--color-foreground)/10 flex-center">
            <SlCalender className="black-text text-2xl" />
          </div>
          <div>
            <h2 className="heading font-bold text-2xl">
              Book Free Consultation
            </h2>
            <p className="text-sm">
              Let&apos;s discuss your project and bring your vision to life.
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex-center my-8">
          {steps.map((item, index) => (
            <div key={index} className="flex items-center">
              <div className="flex items-center gap-3">
                <span
                  className={`w-8 h-8 border ${index <= step ? "black-bg black-border white-text" : "bg-gray-100 border-gray-300"} rounded-full flex-center`}
                >
                  {index + 1}
                </span>
                <span
                  className={`text-sm ${index <= step ? "font-semibold black-text" : "font-semibold text-gray-500"}`}
                >
                  {item}
                </span>
              </div>

              {/* Lines */}
              {index < steps.length - 1 && (
                <div className={`mx-4 w-25 h-0.5 bg-gray-200`} />
              )}
            </div>
          ))}
        </div>

        {/* Main area*/}
        <div className="w-full h-full border border-gray-200 rounded-xl flex items-stretch">
          {/* Leftside */}
          <div className="w-80 black-bg rounded-xl">
            <div className="w-full h-60 rounded-xl overflow-hidden relative">
              <Image
                src="/booking-modal-image.jpg"
                alt="White house under blue sky"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
            <div className="p-8 space-y-3">
              {leftSideTexts.map((item, index) => (
                <div key={index} className="white-text flex items-center gap-5">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Details area */}
          <div className="flex-1 p-10">
            <div>
              <h3 className="heading text-xl font-bold">
                {detailsTitle[step].heading}
              </h3>
              <p className="text-sm">{detailsTitle[step].text}</p>
            </div>

            {/* Input area */}
            <div className="mt-10 mb-18">
              {/* About you */}
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <Input
                      label="Full Name"
                      name="name"
                      type="text"
                      value={formData.personalDetails.fullName}
                      onChange={(value) => {
                        updateFormData("personalDetails", "fullName", value);
                        setEmptyErrors((prev) => ({
                          ...prev,
                          fullName: false,
                        }));
                      }}
                      placeholder="Enter your full name"
                      icon={FiUser}
                      required={true}
                      error={emptyErrors.fullName}
                    />
                  </div>
                  <div className="flex gap-6">
                    <Input
                      label="Email Address"
                      name="email"
                      type="text"
                      value={formData.personalDetails.email}
                      onChange={(value) =>
                        updateFormData("personalDetails", "email", value)
                      }
                      placeholder="Enter your email"
                      icon={FiMail}
                      required={true}
                    />
                    <Input
                      label="Phone Number"
                      name="phone"
                      type="text"
                      value={formData.personalDetails.phone}
                      onChange={(value) =>
                        updateFormData("personalDetails", "phone", value)
                      }
                      placeholder="Enter your phone number"
                      icon={FiPhone}
                      required={true}
                    />
                  </div>
                </div>
              )}

              {/* About project */}
              {step === 1 && (
                <div className="space-y-6">
                  <Select
                    label="Project Type"
                    value={formData.projectDetails.projectType}
                    onChange={(value) =>
                      updateFormData("projectDetails", "projectType", value)
                    }
                    options={projectTypes}
                    placeholder="Select project type"
                    required={true}
                    icon={FiLayers}
                  />

                  <div className="flex gap-6">
                    <Select
                      label="Estimated Budget"
                      value={formData.projectDetails.projectBudget}
                      onChange={(value) =>
                        updateFormData("projectDetails", "projectBudget", value)
                      }
                      options={budgetOptions}
                      placeholder="Select project type"
                      required={true}
                      icon={FiDollarSign}
                    />

                    <Input
                      label="Project ZIP Code"
                      name="zipCode"
                      type="text"
                      value={formData.projectDetails.projectZipCode}
                      onChange={(value) =>
                        updateFormData(
                          "projectDetails",
                          "projectZipCode",
                          value,
                        )
                      }
                      placeholder="12345"
                      icon={FiMapPin}
                      required={true}
                    />
                  </div>
                </div>
              )}

              {/* Schedule */}
              {step === 2 && (
                <div className="space-y-6">
                  {/* Meeting method */}
                  <div className="space-y-1">
                    <label className="font-bold text-sm block">
                      <span>Consultation Type</span>
                      <span className="text-red-600 ms-1">*</span>
                    </label>

                    <div className="flex-center-between gap-3">
                      {consultationMethod.map((option, index) => {
                        const isSelected =
                          option.value ===
                          formData.meetingDetails.meetingMethod;

                        return (
                          <button
                            key={index}
                            onClick={() =>
                              updateFormData(
                                "meetingDetails",
                                "meetingMethod",
                                option.value,
                              )
                            }
                            className={`flex-center w-full gap-3 px-8 py-3 border border-gray-300 rounded-md cursor-pointer ${isSelected ? "bg-gray-200" : ""}`}
                          >
                            <span className="text-base">{option.icon}</span>
                            <span className="text-sm">{option.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex gap-6">
                    <div className="w-2/3">
                      <SelectCalender
                        label="Date"
                        placeholder="Select date"
                        required={true}
                        value={formData.meetingDetails.meetingDate}
                        onChange={(date) =>
                          updateFormData("meetingDetails", "meetingDate", date)
                        }
                      />
                    </div>
                    <div className="flex-1">
                      <Select
                        label="Time"
                        value={formData.meetingDetails.meetingTime}
                        onChange={(time) =>
                          updateFormData("meetingDetails", "meetingTime", time)
                        }
                        options={timeOptions}
                        placeholder="Select time"
                        required={true}
                        icon={FiClock}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Button area */}
            <div className="flex-center-between">
              {step > 0 ? (
                <PrimaryButton
                  btnName="Back"
                  variant="gray"
                  onClick={backStep}
                />
              ) : (
                <div className="flex gap-2">
                  <span className="text-xs">
                    <FiLock />
                  </span>
                  <span className="text-xs w-full max-w-54">
                    Your information is kept private and will only be used to
                    contact you.
                  </span>
                </div>
              )}

              <PrimaryButton
                btnName={step === 2 ? "Book Consultation" : "Next"}
                variant="black"
                onClick={nextStep}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
