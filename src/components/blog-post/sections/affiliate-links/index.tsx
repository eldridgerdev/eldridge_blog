import React from 'react'

import Text from '../../../text'

import { AffiliateLinkContainer, AffiliateLinkRow } from './styled'
import { AffiliateLinkProps } from './types'

export default function AffiliateLinks({
  linkText,
  hide,
  blockText,
}: AffiliateLinkProps) {
  if (hide) return null

  return (
    <AffiliateLinkContainer>
      {blockText && (
        <AffiliateLinkRow>
          <Text>
            <p>{blockText}</p>
          </Text>
          <br />
        </AffiliateLinkRow>
      )}

      <AffiliateLinkRow dangerouslySetInnerHTML={{ __html: linkText }} />

      <AffiliateLinkRow>
        <Text>
          <p>
            <i>
              *We earn a small commission if you purchase a recommended product
              through our affiliate link
            </i>
          </p>
        </Text>
      </AffiliateLinkRow>
    </AffiliateLinkContainer>
  )
}
