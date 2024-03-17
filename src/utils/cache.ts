import * as redis from 'redis';

const redisClient = redis.createClient()


redisClient.on('connect', ()=>{
  console.log('connected to redis')
});

redisClient.on('error', (err)=>{
  console.log('Redis error: ', err)
});

(async()=>{
await redisClient.connect()
})()


export function cacheUrl(shortUrl: string, originalUrl: string){
  redisClient.set(shortUrl, originalUrl, {'EX': 300})
}

export function getCachedUrl(shortUrl: string): Promise<string | null> {
  return new Promise((resolve, reject) => {
    // Get the original URL corresponding to the short URL
    redisClient.get(shortUrl).then(data=>resolve(data)).catch(e=>reject(e))
  });
}


