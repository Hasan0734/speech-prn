export const profileTree = [
  {
    key: 1,
    label: 'Update Profile',
    icon: 'fa-regular fa-user',
    link: '/?tab=update_profile',
  },
  {
    key: 2,
    label: 'Change Password',
    icon: 'fas fa-key',
    link: '/?tab=update_password',
  },
  {
    key: 3,
    label: 'Linked Devices',
    icon: 'fas fa-desktop',
    link: '/?tab=linked_devices',
  },
  {
    key: 4,
    label: 'Logout',
    icon: 'fas fa-power-off',
    link: '/?tab=logout',
  },
]

export const categories = [
  'Travel',
  'Personal Development',
  'Food and Recipe',
  'Technology',
  'Fitness',
  'Business',
]
 
export const conditions = [
  {
    id: 1,
    title: 'Acceptance of Terms',
    child: [
      {
        id: 1,
        text: '1.1 By using the Services, you acknowledge that you have" "read, understood, and agree to be bound by this Agreement. ',
      },
      {
        id: 2,
        text: '1.2 By using the Services, you acknowledge that you have" "read, understood, and agree to be bound by this Agreement. 1.2 If you do not agree with any part of this Agreement, you should not access or use the Services.',
      },
    ],
  },
  {
    id: 2,
    title: 'Use of Services',
    child: [
      {
        id: 1,
        text: `2.1 The Services provided by Harmon Group Media Partners, LLC allow Users to create costume comic strips using the Company's characters ("Characters").`,
      },
      {
        id: 2,
        text: '2.2 All Characters are the intellectual property of Harmon Group Media Partners, LLC and are protected by copyright and trademark laws.',
      },
      {
        id: 3,
        text: '2.3 Users are granted a limited, non-exclusive, non-transferable license to use the Characters solely for the purpose of creating costume comic strips using the Services. ',
      },
      {
        id: 4,
        text: '2.4 Users shall not use the Characters for any other purpose without obtaining prior written consent from Harmon Group Media Partners, LLC.',
      },
    ],
  },
  {
    id: 3,
    title: 'Royalty System',
    child: [
      {
        id: 1,
        text: `3.1 Creators of costume comic strips using the Characters may be eligible to receive a royalty payment from Harmon Group Media Partners, LLC.`,
      },
      {
        id: 2,
        text: '3.2 The specific terms and conditions regarding the royalty system, including the percentage of royalties and payment schedule, will be outlined in a separate agreement between Harmon Group Media Partners, LLC and the Creator.',
      },
      {
        id: 3,
        text: "3.3 The Creator acknowledges that the payment of royalties is subject to Harmon Group Media Partners, LLC's sole discretion and may be modified or discontinued at any time.",
      },
    ],
  },
  {
    id: 4,
    title: 'Intellectual Property',
    child: [
      {
        id: 1,
        text: `4.1 All content and materials provided through the Services, including but not limited to the Characters, text, graphics, logos, images, and software, are the property of Harmon Group Media Partners, LLC and are protected by intellectual property laws.`,
      },
      {
        id: 2,
        text: '4.2 Users shall not reproduce, modify, distribute, or create derivative works of the Characters or any other content provided through the Services without obtaining prior written consent from Harmon Group Media Partners, LLC.',
      },
    ],
  },
  {
    id: 5,
    title: 'User Conduct',
    child: [
      {
        id: 1,
        text: `5.1 You agree not to:`,
        childofchild: [
          { id: 1, text: 'a) Violate any applicable laws or regulations.' },
          {
            id: 2,
            text: 'b) Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or entity.',
          },
          {
            id: 3,
            text: 'c) Engage in any activity that could harm or disrupt the Services or the servers and networks associated with the Services.',
          },
          {
            id: 4,
            text: 'd) Attempt to gain unauthorized access to any portion of the Services.',
          },
        ],
      },
     
    ],
  },
  {
    id: 6,
    title: 'Disclaimer of Warranties',
    child: [
      {
        id: 1,
        text: `6.1 The Services are provided on an ""as is"" and ""as"
        "available"" basis. Harmon Group Media Partners, LLC makes no warranties, express or implied, regarding the Services, including but not limited to the accuracy, reliability, or availability of the Services.`,
      },
    ],
  },
  {
    id: 7,
    title: 'Limitation of Liability',
    child: [
      {
        id: 1,
        text: `7.1 To the maximum extent permitted by applicable law, Harmon Group Media Partners, LLC and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in any way connected with the use of the Services.`,
      },
    ],
  },
  {
    id: 8,
    title: 'Indemnification',
    child: [
      {
        id: 1,
        text: `8.1 You agree to indemnify and hold Harmon Group Media Partners, LLC and its affiliates harmless from any claims, losses, liabilities, damages, costs, or expenses arising out of your`,
      },
    ],
  },
];
