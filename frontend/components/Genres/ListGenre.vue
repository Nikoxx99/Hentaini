<template>
  <v-container fluid>
    <v-row>
      <v-container>
        <v-row>
          <v-breadcrumbs :items="breadcrumb" divider="•" style="padding:1rem 1rem 1rem 1rem" class="grey darken-4" />
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-container>
        <v-row class="grey darken-4">
          <v-col cols="12">
            <h1>No GF? No problem. Explore our <span class="blue--text darken-4">{{ Genre.text }}</span> series.</h1>
          </v-col>
          <v-col cols="12">
            <p>You can serch for the best {{ Genre.text }} Hentai out there in this page.</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" class="grey darken-3">
            <v-list rounded :subheader="false">
              <v-subheader>ORDER BY</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="order in Orders"
                  :key="order.id"
                  :href="`/genres/${actualGenre}?sort=${order.url}`"
                  active-class="blue darken-3 white--text"
                  hover="blue darken-4 white--text"
                >
                  <v-list-item-icon>
                    <v-icon>mdi-filter</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="order.name" />
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-list rounded :subheader="false">
              <v-subheader>HENTAI GENRES</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="genre in Genres"
                  :key="genre.text"
                  :href="`/genres/${genre.url}`"
                >
                  <v-list-item-icon>
                    <v-icon>mdi-folder-search-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="genre.text" />
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col
            v-for="serie in Genre.series"
            :key="serie._id"
            cols="12"
            lg="2"
            md="6"
            sm="12"
          >
            <NiSerieCard
              :title="serie.title"
              :synopsis="serie.synopsis"
              :genres="serie.genres"
              :status="serie.status"
              :url="serie.episodes[0].urlName"
              :screenshot="serie.coverUrl"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'
import NiSerieCard from '../NiSerieCard'
export default {
  components: {
    NiSerieCard
  },
  apollo: {
    Genre () {
      return {
        query: gql`
        query ($url: String, $sort: String){
          Genre(url: $url){
            text
            url
            series(sort: $sort){
              _id
              title
              synopsis
              genres {
                text
              }
              episodes {
                urlName
              }
              status
              coverUrl
            }
          }
        }
      `,
        variables () {
          if (!this.$route.query.sort) {
            return {
              url: this.$route.params.genre
            }
          } else {
            return {
              url: this.$route.params.genre,
              sort: this.$route.query.sort
            }
          }
        }
      }
    },
    Genres () {
      return {
        query: gql`
        query ($limit: Int){
          Genres(limit: $limit){
            text
            url
          }
        }
      `,
        variables: {
          limit: 1000
        }
      }
    }
  },
  data () {
    return {
      actualGenre: this.$route.params.genre,
      Orders: [
        { name: 'Most Views', url: 'ascending' },
        { name: 'Low Views', url: 'descending' }
      ],
      breadcrumb: [
        {
          text: 'Hentaini',
          disabled: false,
          href: '/'
        },
        {
          text: 'Explore',
          disabled: false,
          href: '/explore/'
        },
        {
          text: '',
          disabled: true
        }
      ]
    }
  },
  mounted () {
    this.breadcrumb[2].text = this.Genre.text
  }
}
</script>

<style>

</style>
