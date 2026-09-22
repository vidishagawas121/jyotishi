import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'नाम अनिवार्य है (Name is required)'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'मोबाइल नंबर अनिवार्य है (Phone is required)'],
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      default: '',
    },
    service: {
      type: String,
      default: 'kundli-analysis',
      trim: true,
    },
    serviceTitle: {
      type: String,
      default: 'कुंडली विश्लेषण',
      trim: true,
    },
    astrologer: {
      type: String,
      default: 'any',
      trim: true,
    },
    preferredDate: {
      type: String,
      default: '',
    },
    preferredTime: {
      type: String,
      default: '',
    },
    dob: {
      type: String,
      default: '',
    },
    tob: {
      type: String,
      default: '',
    },
    pob: {
      type: String,
      default: '',
    },
    gender: {
      type: String,
      enum: ['male', 'female', 'other', ''],
      default: '',
    },
    question: {
      type: String,
      default: '',
      trim: true,
    },
    type: {
      type: String,
      enum: ['appointment', 'contact', 'manual'],
      default: 'appointment',
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'in_progress', 'completed', 'cancelled'],
      default: 'new',
      index: true,
    },
    adminNotes: {
      type: String,
      default: '',
      trim: true,
    },
    source: {
      type: String,
      default: 'Website Form',
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id.toString();
        delete ret.__v;
        return ret;
      },
    },
  }
);

// Indexes for high performance querying & analytics
enquirySchema.index({ createdAt: -1 });
enquirySchema.index({ status: 1, createdAt: -1 });
enquirySchema.index({ type: 1, createdAt: -1 });
enquirySchema.index({ phone: 1 });

export const Enquiry = mongoose.model('Enquiry', enquirySchema);
