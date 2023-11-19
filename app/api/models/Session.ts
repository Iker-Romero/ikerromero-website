import { Schema, model } from 'mongoose'

const sessionSchema = new Schema(
  {
    startDate: {
      type: Date,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userAgent: {
      type: {
        isBot: Boolean,
        ua: String,
        browser: {
          name: String,
          version: String
        },
        device: {
          model: String,
          type: { type: String },
          vendor: String
        },
        engine: {
          name: String,
          version: String
        },
        os: {
          name: String,
          version: String
        },
        cpu: {
          architecture: String
        }
      },
      required: true
    },
    geolocation: {
      type: {
        ip: String,
        continent_code: String,
        continent_name: String,
        country_code2: String,
        country_code3: String,
        country_name: String,
        country_name_official: String,
        country_capital: String,
        state_prov: String,
        state_code: String,
        district: String,
        city: String,
        zipcode: String,
        latitude: String,
        longitude: String,
        is_eu: Boolean,
        calling_code: String,
        country_tld: String,
        languages: String,
        country_flag: String,
        geoname_id: String,
        isp: String,
        connection_type: String,
        organization: String,
        currency: {
          code: String,
          name: String,
          symbol: String
        },
        time_zone: {
          name: String,
          offset: Number,
          offset_with_dst: Number,
          current_time: String,
          current_time_unix: Number,
          is_dst: Boolean,
          dst_savings: Number
        }
      },
      required: true
    },
    contactSubmissions: [{ type: Schema.Types.ObjectId, ref: 'Contact' }],
    pages: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Page' }],
      required: true
    },
    time: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

const Session = model('Session', sessionSchema)

export default Session
